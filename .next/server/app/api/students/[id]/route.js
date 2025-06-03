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
exports.id = "app/api/students/[id]/route";
exports.ids = ["app/api/students/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/students/[id]/route.ts":
/*!****************************************!*\
  !*** ./app/api/students/[id]/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function GET(_, { params }) {\n    const student = await prisma.student.findUnique({\n        where: {\n            id: parseInt(params.id)\n        }\n    });\n    return Response.json(student);\n}\nasync function PUT(req, { params }) {\n    const formData = await req.formData();\n    const name = formData.get('name');\n    const email = formData.get('email');\n    const age = parseInt(formData.get('age'));\n    const file = formData.get('image');\n    let imagePath = undefined;\n    if (file && file.name) {\n        const bytes = await file.arrayBuffer();\n        const buffer = Buffer.from(bytes);\n        const fileName = `${Date.now()}-${file.name}`;\n        const filePath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), 'public/uploads', fileName);\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(filePath, buffer);\n        imagePath = `/uploads/${fileName}`;\n    }\n    const dataToUpdate = {\n        name,\n        email,\n        age\n    };\n    if (imagePath) {\n        dataToUpdate.image = imagePath;\n    }\n    const updated = await prisma.student.update({\n        where: {\n            id: parseInt(params.id)\n        },\n        data: dataToUpdate\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(updated);\n}\nasync function DELETE(_, { params }) {\n    await prisma.student.delete({\n        where: {\n            id: parseInt(params.id)\n        }\n    });\n    return Response.json({\n        deleted: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0dWRlbnRzL1tpZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNOO0FBQ1o7QUFDZTtBQUUxQyxNQUFNSSxTQUFTLElBQUlKLHdEQUFZQTtBQUV4QixlQUFlSyxJQUFJQyxDQUFDLEVBQUUsRUFBRUMsTUFBTSxFQUFFO0lBQ3JDLE1BQU1DLFVBQVUsTUFBTUosT0FBT0ksT0FBTyxDQUFDQyxVQUFVLENBQUM7UUFDOUNDLE9BQU87WUFBRUMsSUFBSUMsU0FBU0wsT0FBT0ksRUFBRTtRQUFFO0lBQ25DO0lBQ0EsT0FBT0UsU0FBU0MsSUFBSSxDQUFDTjtBQUN2QjtBQUlPLGVBQWVPLElBQUlDLEdBQUcsRUFBRSxFQUFFVCxNQUFNLEVBQUU7SUFDdkMsTUFBTVUsV0FBVyxNQUFNRCxJQUFJQyxRQUFRO0lBRW5DLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztJQUMxQixNQUFNQyxRQUFRSCxTQUFTRSxHQUFHLENBQUM7SUFDM0IsTUFBTUUsTUFBTVQsU0FBU0ssU0FBU0UsR0FBRyxDQUFDO0lBQ2xDLE1BQU1HLE9BQU9MLFNBQVNFLEdBQUcsQ0FBQztJQUUxQixJQUFJSSxZQUFZQztJQUVoQixJQUFJRixRQUFRQSxLQUFLSixJQUFJLEVBQUU7UUFDckIsTUFBTU8sUUFBUSxNQUFNSCxLQUFLSSxXQUFXO1FBQ3BDLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQ0o7UUFDM0IsTUFBTUssV0FBVyxHQUFHQyxLQUFLQyxHQUFHLEdBQUcsQ0FBQyxFQUFFVixLQUFLSixJQUFJLEVBQUU7UUFDN0MsTUFBTWUsV0FBVy9CLDBDQUFJQSxDQUFDZ0MsUUFBUUMsR0FBRyxJQUFJLGtCQUFrQkw7UUFDdkQsTUFBTTdCLHNEQUFTQSxDQUFDZ0MsVUFBVU47UUFDMUJKLFlBQVksQ0FBQyxTQUFTLEVBQUVPLFVBQVU7SUFDcEM7SUFFQSxNQUFNTSxlQUFvQjtRQUN4QmxCO1FBQ0FFO1FBQ0FDO0lBQ0Y7SUFFQSxJQUFJRSxXQUFXO1FBQ2JhLGFBQWFDLEtBQUssR0FBR2Q7SUFDdkI7SUFFQSxNQUFNZSxVQUFVLE1BQU1sQyxPQUFPSSxPQUFPLENBQUMrQixNQUFNLENBQUM7UUFDMUM3QixPQUFPO1lBQUVDLElBQUlDLFNBQVNMLE9BQU9JLEVBQUU7UUFBRTtRQUNqQzZCLE1BQU1KO0lBQ1I7SUFFQSxPQUFPakMscURBQVlBLENBQUNXLElBQUksQ0FBQ3dCO0FBQzNCO0FBR08sZUFBZUcsT0FBT25DLENBQUMsRUFBRSxFQUFFQyxNQUFNLEVBQUU7SUFDeEMsTUFBTUgsT0FBT0ksT0FBTyxDQUFDa0MsTUFBTSxDQUFDO1FBQzFCaEMsT0FBTztZQUFFQyxJQUFJQyxTQUFTTCxPQUFPSSxFQUFFO1FBQUU7SUFDbkM7SUFDQSxPQUFPRSxTQUFTQyxJQUFJLENBQUM7UUFBRTZCLFNBQVM7SUFBSztBQUN2QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxaQkFJUlxcRG9jdW1lbnRzXFxuZXh0anNcXG5leHRqcy1hdXRoLWNydWRcXGFwcFxcYXBpXFxzdHVkZW50c1xcW2lkXVxccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyB3cml0ZUZpbGUgfSBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKF8sIHsgcGFyYW1zIH0pIHtcbiAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHByaXNtYS5zdHVkZW50LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBwYXJzZUludChwYXJhbXMuaWQpIH1cbiAgfSlcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oc3R1ZGVudClcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxLCB7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKClcblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nXG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZ1xuICBjb25zdCBhZ2UgPSBwYXJzZUludChmb3JtRGF0YS5nZXQoJ2FnZScpIGFzIHN0cmluZylcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKSBhcyBGaWxlXG5cbiAgbGV0IGltYWdlUGF0aCA9IHVuZGVmaW5lZFxuXG4gIGlmIChmaWxlICYmIGZpbGUubmFtZSkge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpXG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgJHtEYXRlLm5vdygpfS0ke2ZpbGUubmFtZX1gXG4gICAgY29uc3QgZmlsZVBhdGggPSBqb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvdXBsb2FkcycsIGZpbGVOYW1lKVxuICAgIGF3YWl0IHdyaXRlRmlsZShmaWxlUGF0aCwgYnVmZmVyKVxuICAgIGltYWdlUGF0aCA9IGAvdXBsb2Fkcy8ke2ZpbGVOYW1lfWBcbiAgfVxuXG4gIGNvbnN0IGRhdGFUb1VwZGF0ZTogYW55ID0ge1xuICAgIG5hbWUsXG4gICAgZW1haWwsXG4gICAgYWdlLFxuICB9XG5cbiAgaWYgKGltYWdlUGF0aCkge1xuICAgIGRhdGFUb1VwZGF0ZS5pbWFnZSA9IGltYWdlUGF0aFxuICB9XG5cbiAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHByaXNtYS5zdHVkZW50LnVwZGF0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHBhcmFtcy5pZCkgfSxcbiAgICBkYXRhOiBkYXRhVG9VcGRhdGUsXG4gIH0pXG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVwZGF0ZWQpXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShfLCB7IHBhcmFtcyB9KSB7XG4gIGF3YWl0IHByaXNtYS5zdHVkZW50LmRlbGV0ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHBhcmFtcy5pZCkgfVxuICB9KVxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGRlbGV0ZWQ6IHRydWUgfSlcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJ3cml0ZUZpbGUiLCJqb2luIiwiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiR0VUIiwiXyIsInBhcmFtcyIsInN0dWRlbnQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInBhcnNlSW50IiwiUmVzcG9uc2UiLCJqc29uIiwiUFVUIiwicmVxIiwiZm9ybURhdGEiLCJuYW1lIiwiZ2V0IiwiZW1haWwiLCJhZ2UiLCJmaWxlIiwiaW1hZ2VQYXRoIiwidW5kZWZpbmVkIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJmaWxlTmFtZSIsIkRhdGUiLCJub3ciLCJmaWxlUGF0aCIsInByb2Nlc3MiLCJjd2QiLCJkYXRhVG9VcGRhdGUiLCJpbWFnZSIsInVwZGF0ZWQiLCJ1cGRhdGUiLCJkYXRhIiwiREVMRVRFIiwiZGVsZXRlIiwiZGVsZXRlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/students/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&page=%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&page=%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_students_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/students/[id]/route.ts */ \"(rsc)/./app/api/students/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/students/[id]/route\",\n        pathname: \"/api/students/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/students/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ZBAIR\\\\Documents\\\\nextjs\\\\nextjs-auth-crud\\\\app\\\\api\\\\students\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_students_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdHVkZW50cyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzdHVkZW50cyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc3R1ZGVudHMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNaQkFJUiU1Q0RvY3VtZW50cyU1Q25leHRqcyU1Q25leHRqcy1hdXRoLWNydWQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1pCQUlSJTVDRG9jdW1lbnRzJTVDbmV4dGpzJTVDbmV4dGpzLWF1dGgtY3J1ZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFpCQUlSXFxcXERvY3VtZW50c1xcXFxuZXh0anNcXFxcbmV4dGpzLWF1dGgtY3J1ZFxcXFxhcHBcXFxcYXBpXFxcXHN0dWRlbnRzXFxcXFtpZF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N0dWRlbnRzL1tpZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zdHVkZW50cy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHVkZW50cy9baWRdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcWkJBSVJcXFxcRG9jdW1lbnRzXFxcXG5leHRqc1xcXFxuZXh0anMtYXV0aC1jcnVkXFxcXGFwcFxcXFxhcGlcXFxcc3R1ZGVudHNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&page=%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&page=%2Fapi%2Fstudents%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();