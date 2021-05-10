function thr(error: Error): never;
function thr(format: string, ...params: any[]): never;
function thr(errorConstructor: ErrorConstructor, ...args: any[]): never;
export default thr;
