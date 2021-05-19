import { Injectable } from '@angular/core';
import { environmentData } from '@app/@shared/services/config.service';
import { NotificationDataService } from '@app/@shared/services/notification.service';
import {
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';
import { Observable, of, Subject } from 'rxjs';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

var poolData = {
  UserPoolId: environmentData.userPoolId, // Your user pool id here
  ClientId: environmentData.clientId, // Your client id here
};
var userPool = new CognitoUserPool(poolData);

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  registeredUser: CognitoUser;
  authStatusChanged = new Subject<boolean>();
  role: string[] = [];

  constructor(private notificationDataService: NotificationDataService) {}

  signUp(username: string, email: string, password: string): void {
    //     this.authIsLoading.next(true);
    const user = {
      username: username,
      email: email,
      password: password,
    };

    const attrList: CognitoUserAttribute[] = [];
    const emailAttribute = {
      Name: 'email',
      Value: user.email,
    };

    attrList.push(new CognitoUserAttribute(emailAttribute));
    userPool.signUp(user.username, user.password, attrList, null, (err, result) => {
      if (err) {
        console.log('err: ', err);
      }
      this.registeredUser = result.user;
    });
  }
  confirmUser(username: string, code: string) {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitUser = new CognitoUser(userData);
    cognitUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.log('error: ', err);
      }
    });
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext) {
    // Replace by proper authentication call
    const authData = {
      Username: context.username,
      Password: context.password,
    };
    const authDetails = new AuthenticationDetails(authData);

    const userData = {
      Username: context.username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);
    const that = this;

    cognitoUser.authenticateUser(authDetails, {
      onSuccess(result: CognitoUserSession) {
        localStorage.setItem('ROLE', JSON.stringify(result.getIdToken().payload['cognito:groups']));

        result.getAccessToken;
        that.authStatusChanged.next(true);
      },

      onFailure(err) {
        console.log(err);
        that.notificationDataService.showNotification('error', ' Status Text: ' + err.message);
      },
    });
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    this.getAuthenticateUser().signOut();
    this.authStatusChanged.next(false);
    this.role = [];
    localStorage.removeItem('ROLE');

    return of(true);
  }

  getAuthenticateUser() {
    return userPool.getCurrentUser();
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    const user = this.getAuthenticateUser();
    let check = false;
    user?.getSession((err: any, session: any) => {
      if (session.isValid()) {
        check = true;
      }
    });
    return check;
  }

  getRole() {
    return this.role;
  }
}
