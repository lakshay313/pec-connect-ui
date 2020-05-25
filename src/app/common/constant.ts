export class Constant {
         // Cookie-Constant
         public static ACCESS_TOKEN = 'access_token';

         // Record-Uploader-Field-Constants
         public static RECORD_TYPE = new Array<Object>(
           { recordType: 'ASSIGNMENT', available: true },
           { recordType: 'BOOK', available: true },
           { recordType: 'NOTES', available: true }
         );
         public static RECORD_CATEGORY = new Array<Object>(
           { recordCategory: 'Engineering', available: true },
           { recordType: 'Business', available: true },
           { recordType: 'Novel', available: true }
         );
         public static ENGINEERING_SPECS = new Array<Object>(
           { recordSpecs: 'Computer Science', available: true },
           { recordSpecs: 'Electronics', available: true },
           { recordSpecs: 'Electrical', available: true },
           { recordSpecs: 'Civil', available: true },
           { recordSpecs: 'Manufacturing', available: true }
         );
         public static BUSINESS_SPECS = new Array<Object>(
           { recordSpecs: 'Accounting', available: true },
           { recordSpecs: 'Auditing', available: true },
           { recordSpecs: 'Marketing', available: true },
           { recordSpecs: 'Sales', available: true }
         );
         public static NOVEL_SPECS = new Array<Object>(
           { recordSpecs: 'Mystery', available: true },
           { recordSpecs: 'Romance', available: true },
           { recordSpecs: 'Thriller', available: true },
         );
       }
