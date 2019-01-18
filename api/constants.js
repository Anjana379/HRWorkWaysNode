import {
    Map as IMap
} from 'immutable';

export const EMPLOYEE_INDEX = 'employee_index';
export const EMPLOYEE_TYPE = 'employee_type';
export const MAX_RESULTS = 1000;


const USER_NAME_FIELD = 'USER_NAME';
const USER_SSO_FIELD = 'USER_SSO';
const BACKGROUND_FLAG_FIELD = 'BACKGROUND_FLAG';
const EMPLOYEE_ID_FIELD = 'EMPLOYEE_ID';

const USER_NAME_COLUMN = 'username';
const USER_SSO_COLUMN = 'usersso';
const BACKGROUND_FLAG_COLUMN = 'backgroundflag';
const EMPLOYEE_ID_COLUMN = 'employeeid';

export const esColumnMapping = IMap({
    [USER_NAME_FIELD]: [USER_NAME_COLUMN],
    [USER_SSO_FIELD]: [USER_SSO_COLUMN],
    [BACKGROUND_FLAG_FIELD]: [BACKGROUND_FLAG_COLUMN],
    [EMPLOYEE_ID_FIELD]: [EMPLOYEE_ID_COLUMN]
});

export const DEPARTMENT_INDEX = 'department_index';
export const DEPARTMENT_TYPE = 'department_type';

const DEPARTMENT_ID_FIELD = 'DEPARTMENT_ID';
const DEPARTMENT_NAME_FIELD = 'DEPARTMENT_NAME';
const DEPARTMENT_MANAGER_FIELD = 'DEPARTMENT_MANAGER';

const DEPARTMENT_ID_COLUMN = 'deptId';
const DEPARTMENT_NAME_COLUMN = 'deptName';
const DEPARTMENT_MANAGER_COLUMN = 'deptManager';

export const dsColumnMapping = IMap({
    [DEPARTMENT_ID_FIELD]: [DEPARTMENT_ID_COLUMN],
    [DEPARTMENT_NAME_FIELD]: [DEPARTMENT_NAME_COLUMN],
    [DEPARTMENT_MANAGER_FIELD]: [DEPARTMENT_MANAGER_COLUMN],
});

export const LOGIN_INDEX = 'login_index';
export const LOGIN_TYPE = 'login_type';

const USER_ID_FIELD = 'USER_ID';
const PASSWORD_FIELD = 'PASSWORD';
const USER_FIELD = 'USER';
const EMP_ID_FIELD = 'EMP_ID';


const USER_ID_COLUMN = 'userid';
const PASSWORD_COLUMN = 'password';
const USER_COLUMN = 'username';
const EMP_ID_COLUMN = 'employeeid';

export const lsColumnMapping = IMap({
    [USER_ID_FIELD]: [USER_ID_COLUMN],
    [PASSWORD_FIELD]: [PASSWORD_COLUMN],
    [USER_FIELD]: [USER_COLUMN],
    [EMP_ID_FIELD]: [EMP_ID_COLUMN]
});

export const VISITOR_INDEX = 'visitor_index';
export const VISITOR_TYPE = 'visitor_type';
export const MAX_RESULT = 3000;


const SRNO_FIELD = 'SRNO';
const DATE_FIELD = 'DATE';
const NAME_FIELD = 'NAME';
const CONTACT_NAME_FIELD = 'CONTACT_NAME';
const CONTACT_EMPLOYEE_ID_FIELD = 'CONTACT_EMPLOYEE_ID';
const BADGE_NO_FIELD = 'BADGE_NO';
const PURPOSE_FIELD = 'PURPOSE';
const IN_TIME_FIELD = 'IN_TIME';
const PERSONAL_ITEM_IN_FIELD = 'PERSONAL_ITEM_IN';
const OUT_TIME_FIELD = 'OUT_TIME';
const PERSONAL_ITEM_OUT_FIELD = 'PERSONAL_ITEM_OUT';
const REMARKS_FIELD = 'REMARKS';

const SRNO_COLUMN = 'srno';
const DATE_COLUMN = 'date';
const NAME_COLUMN = 'name';
const CONTACT_NAME_COLUMN = 'contactname';
const CONTACT_EMPLOYEE_ID_COLUMN = 'contactemployeeid';
const BADGE_NO_COLUMN = 'badgeno';
const PURPOSE_COLUMN = 'purpose';
const IN_TIME_COLUMN = 'intime';
const PERSONAL_ITEM_IN_COLUMN = 'personalitemin';
const OUT_TIME_COLUMN = 'outtime';
const PERSONAL_ITEM_OUT_COLUMN = 'personalitemout';
const REMARKS_COLUMN = 'remarks';
const PURPOSE_TYPE = 'purpose_type';

export const vsColumnMapping = IMap({
    [SRNO_FIELD]: [SRNO_COLUMN],
    [DATE_FIELD]: [DATE_COLUMN],
    [NAME_FIELD]: [NAME_COLUMN],
    [CONTACT_NAME_FIELD]: [CONTACT_NAME_COLUMN],
    [CONTACT_EMPLOYEE_ID_FIELD]: [CONTACT_EMPLOYEE_ID_COLUMN],
    [BADGE_NO_FIELD]: [BADGE_NO_COLUMN],
    [PURPOSE_FIELD]: [PURPOSE_COLUMN],
    [IN_TIME_FIELD]: [IN_TIME_COLUMN],
    [PERSONAL_ITEM_IN_FIELD]: [PERSONAL_ITEM_IN_COLUMN],
    [OUT_TIME_FIELD]: [OUT_TIME_COLUMN],
    [PERSONAL_ITEM_OUT_FIELD]: [PERSONAL_ITEM_OUT_COLUMN],
    [REMARKS_FIELD]: [REMARKS_COLUMN]
});

export const LOOKUP_INDEX = 'lookup_index';
export const MAX_RES = 3000;

const ID_FIELD ='ID';


const ID_TYPE = 'id_type';




export const lookupTypeMapping = IMap({
    [PURPOSE_FIELD]: [PURPOSE_TYPE],
    [ID_FIELD]: [ID_TYPE]
    
});
