function thr(error: Error): any;
function thr(format: string, ...params: any[]): any;
function thr<E>(errorClass: Constructor<E>, ...args: any[]): any;
export default thr;
