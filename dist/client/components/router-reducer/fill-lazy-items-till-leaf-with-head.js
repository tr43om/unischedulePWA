"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fillLazyItemsTillLeafWithHead = fillLazyItemsTillLeafWithHead;
var _appRouterContext = require("../../../shared/lib/app-router-context");
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                parallelRouteCacheNode.delete(cacheKey);
                const newCacheNode = {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes)
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode = {
            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
    }
}

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map