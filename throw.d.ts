function thr(error: Error): never;
function thr(format: string, ...params: any[]): never;
function thr<E>(errorClass: Constructor<E>, ...args: any[]): never;
export default thr;
