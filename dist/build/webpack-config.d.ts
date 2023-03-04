import { webpack } from 'next/dist/compiled/webpack/webpack';
import { CustomRoutes } from '../lib/load-custom-routes.js';
import { CompilerNameValues } from '../shared/lib/constants';
import { NextConfigComplete } from '../server/config-shared';
import type { Span } from '../trace';
import type { MiddlewareMatcher } from './analysis/get-page-static-info';
export declare const getBabelConfigFile: (dir: string) => Promise<string | undefined>;
export declare function getDefineEnv({ dev, config, distDir, isClient, hasRewrites, isNodeServer, isEdgeServer, middlewareMatchers, clientRouterFilters, }: {
    dev?: boolean;
    distDir: string;
    isClient?: boolean;
    hasRewrites?: boolean;
    isNodeServer?: boolean;
    isEdgeServer?: boolean;
    middlewareMatchers?: MiddlewareMatcher[];
    config: NextConfigComplete;
    clientRouterFilters: Parameters<typeof getBaseWebpackConfig>[1]['clientRouterFilters'];
}): {
    'process.env'?: string | undefined;
    'global.GENTLY'?: string | undefined;
    'process.env.__NEXT_TRAILING_SLASH': string;
    'process.env.__NEXT_BUILD_INDICATOR': string;
    'process.env.__NEXT_BUILD_INDICATOR_POSITION': string;
    'process.env.__NEXT_STRICT_MODE': string;
    'process.env.__NEXT_STRICT_MODE_APP': string;
    'process.env.__NEXT_OPTIMIZE_FONTS': string;
    'process.env.__NEXT_OPTIMIZE_CSS': string;
    'process.env.__NEXT_SCRIPT_WORKERS': string;
    'process.env.__NEXT_SCROLL_RESTORATION': string;
    'process.env.__NEXT_IMAGE_OPTS': string;
    'process.env.__NEXT_ROUTER_BASEPATH': string;
    'process.env.__NEXT_HAS_REWRITES': string;
    'process.env.__NEXT_I18N_SUPPORT': string;
    'process.env.__NEXT_I18N_DOMAINS': string;
    'process.env.__NEXT_ANALYTICS_ID': string;
    'process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE': string;
    'process.env.__NEXT_EXTERNAL_MIDDLEWARE_REWRITE_RESOLVE': string;
    'process.env.__NEXT_MANUAL_TRAILING_SLASH': string;
    'process.env.__NEXT_HAS_WEB_VITALS_ATTRIBUTION': string;
    'process.env.__NEXT_WEB_VITALS_ATTRIBUTION': string;
    'process.env.__NEXT_DIST_DIR'?: string | undefined;
    'process.env.NODE_ENV': string;
    'process.env.NEXT_RUNTIME': string;
    'process.env.__NEXT_MIDDLEWARE_MATCHERS': string;
    'process.env.__NEXT_MANUAL_CLIENT_BASE_PATH': string;
    'process.env.__NEXT_NEW_LINK_BEHAVIOR': string;
    'process.env.__NEXT_CLIENT_ROUTER_FILTER_ENABLED': string;
    'process.env.__NEXT_CLIENT_ROUTER_S_FILTER': string;
    'process.env.__NEXT_CLIENT_ROUTER_D_FILTER': string;
    'process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE': string;
    'process.env.__NEXT_MIDDLEWARE_PREFETCH': string;
    'process.env.__NEXT_CROSS_ORIGIN': string;
    'process.browser': string;
    'process.env.__NEXT_TEST_MODE': string;
    EdgeRuntime?: string | undefined;
    __NEXT_DEFINE_ENV: string;
};
export declare function attachReactRefresh(webpackConfig: webpack.Configuration, targetLoader: webpack.RuleSetUseItem): void;
export declare const NODE_RESOLVE_OPTIONS: {
    dependencyType: string;
    modules: string[];
    fallback: boolean;
    exportsFields: string[];
    importsFields: string[];
    conditionNames: string[];
    descriptionFiles: string[];
    extensions: string[];
    enforceExtensions: boolean;
    symlinks: boolean;
    mainFields: string[];
    mainFiles: string[];
    roots: never[];
    fullySpecified: boolean;
    preferRelative: boolean;
    preferAbsolute: boolean;
    restrictions: never[];
};
export declare const NODE_BASE_RESOLVE_OPTIONS: {
    alias: boolean;
    dependencyType: string;
    modules: string[];
    fallback: boolean;
    exportsFields: string[];
    importsFields: string[];
    conditionNames: string[];
    descriptionFiles: string[];
    extensions: string[];
    enforceExtensions: boolean;
    symlinks: boolean;
    mainFields: string[];
    mainFiles: string[];
    roots: never[];
    fullySpecified: boolean;
    preferRelative: boolean;
    preferAbsolute: boolean;
    restrictions: never[];
};
export declare const NODE_ESM_RESOLVE_OPTIONS: {
    alias: boolean;
    dependencyType: string;
    conditionNames: string[];
    fullySpecified: boolean;
    modules: string[];
    fallback: boolean;
    exportsFields: string[];
    importsFields: string[];
    descriptionFiles: string[];
    extensions: string[];
    enforceExtensions: boolean;
    symlinks: boolean;
    mainFields: string[];
    mainFiles: string[];
    roots: never[];
    preferRelative: boolean;
    preferAbsolute: boolean;
    restrictions: never[];
};
export declare const NODE_BASE_ESM_RESOLVE_OPTIONS: {
    alias: boolean;
    dependencyType: string;
    conditionNames: string[];
    fullySpecified: boolean;
    modules: string[];
    fallback: boolean;
    exportsFields: string[];
    importsFields: string[];
    descriptionFiles: string[];
    extensions: string[];
    enforceExtensions: boolean;
    symlinks: boolean;
    mainFields: string[];
    mainFiles: string[];
    roots: never[];
    preferRelative: boolean;
    preferAbsolute: boolean;
    restrictions: never[];
};
export declare const nextImageLoaderRegex: RegExp;
export declare function resolveExternal(dir: string, esmExternalsConfig: NextConfigComplete['experimental']['esmExternals'], context: string, request: string, isEsmRequested: boolean, hasAppDir: boolean, getResolve: (options: any) => (resolveContext: string, resolveRequest: string) => Promise<[string | null, boolean]>, isLocalCallback?: (res: string) => any, baseResolveCheck?: boolean, esmResolveOptions?: any, nodeResolveOptions?: any, baseEsmResolveOptions?: any, baseResolveOptions?: any): Promise<{
    localRes: any;
    res?: undefined;
    isEsm?: undefined;
} | {
    res: string | null;
    isEsm: boolean;
    localRes?: undefined;
}>;
export declare function loadProjectInfo({ dir, config, dev, }: {
    dir: string;
    config: NextConfigComplete;
    dev: boolean;
}): Promise<{
    jsConfig: any;
    resolvedBaseUrl: string | undefined;
    supportedBrowsers: string[] | undefined;
}>;
export default function getBaseWebpackConfig(dir: string, { buildId, config, compilerType, dev, entrypoints, isDevFallback, pagesDir, reactProductionProfiling, rewrites, runWebpackSpan, target, appDir, middlewareMatchers, noMangling, jsConfig, resolvedBaseUrl, supportedBrowsers, clientRouterFilters, }: {
    buildId: string;
    config: NextConfigComplete;
    compilerType: CompilerNameValues;
    dev?: boolean;
    entrypoints: webpack.EntryObject;
    isDevFallback?: boolean;
    pagesDir?: string;
    reactProductionProfiling?: boolean;
    rewrites: CustomRoutes['rewrites'];
    runWebpackSpan: Span;
    target?: string;
    appDir?: string;
    middlewareMatchers?: MiddlewareMatcher[];
    noMangling?: boolean;
    jsConfig: any;
    resolvedBaseUrl: string | undefined;
    supportedBrowsers: string[] | undefined;
    clientRouterFilters?: {
        staticFilter: ReturnType<import('../shared/lib/bloom-filter').BloomFilter['export']>;
        dynamicFilter: ReturnType<import('../shared/lib/bloom-filter').BloomFilter['export']>;
    };
}): Promise<webpack.Configuration>;
