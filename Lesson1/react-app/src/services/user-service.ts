import create from "./httpd-service";

export interface User {
    id: number;
    name: string;
}

export default create('/users');

