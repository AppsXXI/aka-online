import { Injectable } from "@angular/core";

@Injectable()
export class AkaAuthService {

  public authenticate(email: string, pass: string): boolean {
    return true;
  }
  
  public isAuthenticated(): boolean {
    return true;
  }
  
  public authWithGoogle(): boolean {
    return true;
  }

  public authWithFacebook(): boolean {
    return true;
  }

  public authWithGithub(): boolean {
    return true;
  }

  public authWithTwitter(): boolean {
    return true;
  }
  
  public getCurrentUser(): any {
    return {};
  }
}