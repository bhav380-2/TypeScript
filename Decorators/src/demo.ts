interface Contact {
    id: number;
}
const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    },
    isAuthenticated():boolean{
        return true
    }
}

function authorize(role : string){// decorator factory

   return function authorizeDecorator(target:any, property:string,descriptor:PropertyDescriptor){
        //  ___option1 : modify behavior of decorator_______
        const wrapped = descriptor.value;
        descriptor.value = function(){   // leaves descriptor in place and just modifies its property
            if(!currentUser.isAuthenticated()){
                throw Error("User is not authenticated");
            }

            if(!currentUser.isInRole(role)){
                throw Error(`User not in role ${role}`)
            }
    
            try{
                return wrapped.apply(this,arguments);
    
            }catch(ex){
                throw ex;
            }
        }
        // __option2 : return brand new descriptor object
        // return {
        //     //.. make any changes here
        // } as PropertyDescriptor
    }
}

// @log  class decorator
class ContactRepository {
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        const contact = this.contacts.find(x => x.id === id) as Contact;
        return contact;
    }
    
    @authorize("ContactEditor")
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);
        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }
    }
}