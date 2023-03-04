import { CacheFs } from '../../../shared/lib/utils';
import type { CacheHandler, CacheHandlerContext, CacheHandlerValue } from './';
declare type FileSystemCacheContext = Omit<CacheHandlerContext, 'fs' | 'serverDistDir'> & {
    fs: CacheFs;
    serverDistDir: string;
};
export default class FileSystemCache implements CacheHandler {
    private fs;
    private flushToDisk?;
    private serverDistDir;
    private appDir;
    constructor(ctx: FileSystemCacheContext);
    get(key: string, fetchCache?: boolean): Promise<CacheHandlerValue | null>;
    set(key: string, data: CacheHandlerValue['value']): Promise<void>;
    private getFsPath;
}
export {};
