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
exports.id = "app/api/students/route";
exports.ids = ["app/api/students/route"];
exports.modules = {

/***/ "(rsc)/./app/api/students/route.ts":
/*!***********************************!*\
  !*** ./app/api/students/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function GET() {\n    const students = await prisma.student.findMany();\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(students);\n}\nasync function POST(req) {\n    const formData = await req.formData();\n    const name = formData.get('name');\n    const email = formData.get('email');\n    const age = parseInt(formData.get('age'));\n    const file = formData.get('image');\n    if (!file || !file.name) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: 'No file uploaded'\n        }, {\n            status: 400\n        });\n    }\n    const bytes = await file.arrayBuffer();\n    const buffer = Buffer.from(bytes);\n    const fileName = `${Date.now()}-${file.name}`;\n    const filePath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), 'public/uploads', fileName);\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(filePath, buffer);\n    const student = await prisma.student.create({\n        data: {\n            name,\n            email,\n            age,\n            image: `/uploads/${fileName}`\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(student);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0dWRlbnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTjtBQUNaO0FBQzRCO0FBR2hELE1BQU1JLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWTtJQUNkO0FBQ0YsRUFBQztBQUVELE1BQU1DLFNBQVMsSUFBSVAsd0RBQVlBO0FBRXhCLGVBQWVRO0lBQ3BCLE1BQU1DLFdBQVcsTUFBTUYsT0FBT0csT0FBTyxDQUFDQyxRQUFRO0lBQzlDLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNIO0FBQzNCO0FBRU8sZUFBZUksS0FBS0MsR0FBZ0I7SUFDekMsTUFBTUMsV0FBVyxNQUFNRCxJQUFJQyxRQUFRO0lBRW5DLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztJQUMxQixNQUFNQyxRQUFRSCxTQUFTRSxHQUFHLENBQUM7SUFDM0IsTUFBTUUsTUFBTUMsU0FBU0wsU0FBU0UsR0FBRyxDQUFDO0lBQ2xDLE1BQU1JLE9BQU9OLFNBQVNFLEdBQUcsQ0FBQztJQUUxQixJQUFJLENBQUNJLFFBQVEsQ0FBQ0EsS0FBS0wsSUFBSSxFQUFFO1FBQ3ZCLE9BQU9iLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRVUsT0FBTztRQUFtQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN4RTtJQUVBLE1BQU1DLFFBQVEsTUFBTUgsS0FBS0ksV0FBVztJQUNwQyxNQUFNQyxTQUFTQyxPQUFPQyxJQUFJLENBQUNKO0lBQzNCLE1BQU1LLFdBQVcsR0FBR0MsS0FBS0MsR0FBRyxHQUFHLENBQUMsRUFBRVYsS0FBS0wsSUFBSSxFQUFFO0lBQzdDLE1BQU1nQixXQUFXOUIsMENBQUlBLENBQUMrQixRQUFRQyxHQUFHLElBQUksa0JBQWtCTDtJQUV2RCxNQUFNNUIsc0RBQVNBLENBQUMrQixVQUFVTjtJQUUxQixNQUFNaEIsVUFBVSxNQUFNSCxPQUFPRyxPQUFPLENBQUN5QixNQUFNLENBQUM7UUFDMUNDLE1BQU07WUFDSnBCO1lBQ0FFO1lBQ0FDO1lBQ0FrQixPQUFPLENBQUMsU0FBUyxFQUFFUixVQUFVO1FBQy9CO0lBQ0Y7SUFFQSxPQUFPMUIscURBQVlBLENBQUNTLElBQUksQ0FBQ0Y7QUFDM0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcWkJBSVJcXERvY3VtZW50c1xcbmV4dGpzXFxuZXh0anMtYXV0aC1jcnVkXFxhcHBcXGFwaVxcc3R1ZGVudHNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSAnZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn1cblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IHN0dWRlbnRzID0gYXdhaXQgcHJpc21hLnN0dWRlbnQuZmluZE1hbnkoKVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oc3R1ZGVudHMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKVxuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmdcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nXG4gIGNvbnN0IGFnZSA9IHBhcnNlSW50KGZvcm1EYXRhLmdldCgnYWdlJykgYXMgc3RyaW5nKVxuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdpbWFnZScpIGFzIEZpbGVcblxuICBpZiAoIWZpbGUgfHwgIWZpbGUubmFtZSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG5cbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKClcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpXG4gIGNvbnN0IGZpbGVOYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YFxuICBjb25zdCBmaWxlUGF0aCA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYy91cGxvYWRzJywgZmlsZU5hbWUpXG5cbiAgYXdhaXQgd3JpdGVGaWxlKGZpbGVQYXRoLCBidWZmZXIpXG5cbiAgY29uc3Qgc3R1ZGVudCA9IGF3YWl0IHByaXNtYS5zdHVkZW50LmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgbmFtZSxcbiAgICAgIGVtYWlsLFxuICAgICAgYWdlLFxuICAgICAgaW1hZ2U6IGAvdXBsb2Fkcy8ke2ZpbGVOYW1lfWAsXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oc3R1ZGVudClcbn1cblxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsIndyaXRlRmlsZSIsImpvaW4iLCJOZXh0UmVzcG9uc2UiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwicHJpc21hIiwiR0VUIiwic3R1ZGVudHMiLCJzdHVkZW50IiwiZmluZE1hbnkiLCJqc29uIiwiUE9TVCIsInJlcSIsImZvcm1EYXRhIiwibmFtZSIsImdldCIsImVtYWlsIiwiYWdlIiwicGFyc2VJbnQiLCJmaWxlIiwiZXJyb3IiLCJzdGF0dXMiLCJieXRlcyIsImFycmF5QnVmZmVyIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsImZpbGVQYXRoIiwicHJvY2VzcyIsImN3ZCIsImNyZWF0ZSIsImRhdGEiLCJpbWFnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/students/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2Froute&page=%2Fapi%2Fstudents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2Froute&page=%2Fapi%2Fstudents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_students_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/students/route.ts */ \"(rsc)/./app/api/students/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/students/route\",\n        pathname: \"/api/students\",\n        filename: \"route\",\n        bundlePath: \"app/api/students/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ZBAIR\\\\Documents\\\\nextjs\\\\nextjs-auth-crud\\\\app\\\\api\\\\students\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_students_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzdHVkZW50cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3R1ZGVudHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzdHVkZW50cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNaQkFJUiU1Q0RvY3VtZW50cyU1Q25leHRqcyU1Q25leHRqcy1hdXRoLWNydWQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1pCQUlSJTVDRG9jdW1lbnRzJTVDbmV4dGpzJTVDbmV4dGpzLWF1dGgtY3J1ZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFpCQUlSXFxcXERvY3VtZW50c1xcXFxuZXh0anNcXFxcbmV4dGpzLWF1dGgtY3J1ZFxcXFxhcHBcXFxcYXBpXFxcXHN0dWRlbnRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdHVkZW50cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N0dWRlbnRzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHVkZW50cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFpCQUlSXFxcXERvY3VtZW50c1xcXFxuZXh0anNcXFxcbmV4dGpzLWF1dGgtY3J1ZFxcXFxhcHBcXFxcYXBpXFxcXHN0dWRlbnRzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2Froute&page=%2Fapi%2Fstudents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fstudents%2Froute&page=%2Fapi%2Fstudents%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstudents%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();