/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/courses/[id]/route";
exports.ids = ["app/api/courses/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/courses/[id]/route.ts":
/*!***************************************!*\
  !*** ./app/api/courses/[id]/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function GET(_, { params }) {\n    const course = await prisma.course.findUnique({\n        where: {\n            id: parseInt(params.id)\n        }\n    });\n    return Response.json(course);\n}\nasync function PUT(req, { params }) {\n    const formData = await req.formData();\n    const title = formData.get('title');\n    const description = formData.get('description');\n    const teacherId = parseInt(formData.get('teacherId'));\n    const file = formData.get('image');\n    let imagePath = undefined;\n    if (file && file.name) {\n        const bytes = await file.arrayBuffer();\n        const buffer = Buffer.from(bytes);\n        const fileName = `${Date.now()}-${file.name}`;\n        const filePath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), 'public/uploads', fileName);\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(filePath, buffer);\n        imagePath = `/uploads/${fileName}`;\n    }\n    const dataToUpdate = {\n        title,\n        description,\n        teacherId\n    };\n    if (imagePath) {\n        dataToUpdate.image = imagePath;\n    }\n    const updated = await prisma.course.update({\n        where: {\n            id: parseInt(params.id)\n        },\n        data: dataToUpdate\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(updated);\n}\nasync function DELETE(_, { params }) {\n    await prisma.course.delete({\n        where: {\n            id: parseInt(params.id)\n        }\n    });\n    return Response.json({\n        deleted: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvdXJzZXMvW2lkXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ047QUFDWjtBQUNlO0FBRTFDLE1BQU1JLFNBQVMsSUFBSUosd0RBQVlBO0FBRXhCLGVBQWVLLElBQUlDLENBQUMsRUFBRSxFQUFFQyxNQUFNLEVBQUU7SUFDckMsTUFBTUMsU0FBUyxNQUFNSixPQUFPSSxNQUFNLENBQUNDLFVBQVUsQ0FBQztRQUM1Q0MsT0FBTztZQUFFQyxJQUFJQyxTQUFTTCxPQUFPSSxFQUFFO1FBQUU7SUFDbkM7SUFDQSxPQUFPRSxTQUFTQyxJQUFJLENBQUNOO0FBQ3ZCO0FBSU8sZUFBZU8sSUFBSUMsR0FBRyxFQUFFLEVBQUVULE1BQU0sRUFBRTtJQUN2QyxNQUFNVSxXQUFXLE1BQU1ELElBQUlDLFFBQVE7SUFFbkMsTUFBTUMsUUFBUUQsU0FBU0UsR0FBRyxDQUFDO0lBQzNCLE1BQU1DLGNBQWNILFNBQVNFLEdBQUcsQ0FBQztJQUNqQyxNQUFNRSxZQUFZVCxTQUFTSyxTQUFTRSxHQUFHLENBQUM7SUFDeEMsTUFBTUcsT0FBT0wsU0FBU0UsR0FBRyxDQUFDO0lBRTFCLElBQUlJLFlBQVlDO0lBRWhCLElBQUlGLFFBQVFBLEtBQUtHLElBQUksRUFBRTtRQUNyQixNQUFNQyxRQUFRLE1BQU1KLEtBQUtLLFdBQVc7UUFDcEMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSjtRQUMzQixNQUFNSyxXQUFXLEdBQUdDLEtBQUtDLEdBQUcsR0FBRyxDQUFDLEVBQUVYLEtBQUtHLElBQUksRUFBRTtRQUM3QyxNQUFNUyxXQUFXaEMsMENBQUlBLENBQUNpQyxRQUFRQyxHQUFHLElBQUksa0JBQWtCTDtRQUN2RCxNQUFNOUIsc0RBQVNBLENBQUNpQyxVQUFVTjtRQUMxQkwsWUFBWSxDQUFDLFNBQVMsRUFBRVEsVUFBVTtJQUNwQztJQUVBLE1BQU1NLGVBQW9CO1FBQ3hCbkI7UUFDQUU7UUFDQUM7SUFDRjtJQUVBLElBQUlFLFdBQVc7UUFDYmMsYUFBYUMsS0FBSyxHQUFHZjtJQUN2QjtJQUVBLE1BQU1nQixVQUFVLE1BQU1uQyxPQUFPSSxNQUFNLENBQUNnQyxNQUFNLENBQUM7UUFDekM5QixPQUFPO1lBQUVDLElBQUlDLFNBQVNMLE9BQU9JLEVBQUU7UUFBRTtRQUNqQzhCLE1BQU1KO0lBQ1I7SUFFQSxPQUFPbEMscURBQVlBLENBQUNXLElBQUksQ0FBQ3lCO0FBQzNCO0FBR08sZUFBZUcsT0FBT3BDLENBQUMsRUFBRSxFQUFFQyxNQUFNLEVBQUU7SUFDeEMsTUFBTUgsT0FBT0ksTUFBTSxDQUFDbUMsTUFBTSxDQUFDO1FBQ3pCakMsT0FBTztZQUFFQyxJQUFJQyxTQUFTTCxPQUFPSSxFQUFFO1FBQUU7SUFDbkM7SUFDQSxPQUFPRSxTQUFTQyxJQUFJLENBQUM7UUFBRThCLFNBQVM7SUFBSztBQUN2QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxaQkFJUlxcRG9jdW1lbnRzXFxuZXh0anNcXG5leHRqcy1hdXRoLWNydWRcXGFwcFxcYXBpXFxjb3Vyc2VzXFxbaWRdXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoXywgeyBwYXJhbXMgfSkge1xuICBjb25zdCBjb3Vyc2UgPSBhd2FpdCBwcmlzbWEuY291cnNlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBwYXJzZUludChwYXJhbXMuaWQpIH1cbiAgfSlcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oY291cnNlKVxufVxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXEsIHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKVxuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KCd0aXRsZScpIGFzIHN0cmluZ1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldCgnZGVzY3JpcHRpb24nKSBhcyBzdHJpbmdcbiAgY29uc3QgdGVhY2hlcklkID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCd0ZWFjaGVySWQnKSBhcyBzdHJpbmcpXG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZVxuXG4gIGxldCBpbWFnZVBhdGggPSB1bmRlZmluZWRcblxuICBpZiAoZmlsZSAmJiBmaWxlLm5hbWUpIHtcbiAgICBjb25zdCBieXRlcyA9IGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKVxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKVxuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YFxuICAgIGNvbnN0IGZpbGVQYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljL3VwbG9hZHMnLCBmaWxlTmFtZSlcbiAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZVBhdGgsIGJ1ZmZlcilcbiAgICBpbWFnZVBhdGggPSBgL3VwbG9hZHMvJHtmaWxlTmFtZX1gXG4gIH1cblxuICBjb25zdCBkYXRhVG9VcGRhdGU6IGFueSA9IHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICB0ZWFjaGVySWQsXG4gIH1cblxuICBpZiAoaW1hZ2VQYXRoKSB7XG4gICAgZGF0YVRvVXBkYXRlLmltYWdlID0gaW1hZ2VQYXRoXG4gIH1cblxuICBjb25zdCB1cGRhdGVkID0gYXdhaXQgcHJpc21hLmNvdXJzZS51cGRhdGUoe1xuICAgIHdoZXJlOiB7IGlkOiBwYXJzZUludChwYXJhbXMuaWQpIH0sXG4gICAgZGF0YTogZGF0YVRvVXBkYXRlLFxuICB9KVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUoXywgeyBwYXJhbXMgfSkge1xuICBhd2FpdCBwcmlzbWEuY291cnNlLmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHBhcmFtcy5pZCkgfVxuICB9KVxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGRlbGV0ZWQ6IHRydWUgfSlcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJ3cml0ZUZpbGUiLCJqb2luIiwiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiR0VUIiwiXyIsInBhcmFtcyIsImNvdXJzZSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwicGFyc2VJbnQiLCJSZXNwb25zZSIsImpzb24iLCJQVVQiLCJyZXEiLCJmb3JtRGF0YSIsInRpdGxlIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJ0ZWFjaGVySWQiLCJmaWxlIiwiaW1hZ2VQYXRoIiwidW5kZWZpbmVkIiwibmFtZSIsImJ5dGVzIiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiZmlsZU5hbWUiLCJEYXRlIiwibm93IiwiZmlsZVBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiZGF0YVRvVXBkYXRlIiwiaW1hZ2UiLCJ1cGRhdGVkIiwidXBkYXRlIiwiZGF0YSIsIkRFTEVURSIsImRlbGV0ZSIsImRlbGV0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/courses/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_courses_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/courses/[id]/route.ts */ \"(rsc)/./app/api/courses/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/courses/[id]/route\",\n        pathname: \"/api/courses/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/courses/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ZBAIR\\\\Documents\\\\nextjs\\\\nextjs-auth-crud\\\\app\\\\api\\\\courses\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_courses_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb3Vyc2VzJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNvdXJzZXMlMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNvdXJzZXMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNaQkFJUiU1Q0RvY3VtZW50cyU1Q25leHRqcyU1Q25leHRqcy1hdXRoLWNydWQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1pCQUlSJTVDRG9jdW1lbnRzJTVDbmV4dGpzJTVDbmV4dGpzLWF1dGgtY3J1ZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDd0M7QUFDckg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFpCQUlSXFxcXERvY3VtZW50c1xcXFxuZXh0anNcXFxcbmV4dGpzLWF1dGgtY3J1ZFxcXFxhcHBcXFxcYXBpXFxcXGNvdXJzZXNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY291cnNlcy9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY291cnNlcy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb3Vyc2VzL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxaQkFJUlxcXFxEb2N1bWVudHNcXFxcbmV4dGpzXFxcXG5leHRqcy1hdXRoLWNydWRcXFxcYXBwXFxcXGFwaVxcXFxjb3Vyc2VzXFxcXFtpZF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&page=%2Fapi%2Fcourses%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();