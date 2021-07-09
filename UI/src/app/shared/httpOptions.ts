import { HttpHeaders } from "@angular/common/http";

export  class httpOptions{
    
    static Options = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${localStorage.getItem('tokenUsuarioLogado')}`
        })
      };
}