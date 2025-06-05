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
exports.id = "app/api/courses/route";
exports.ids = ["app/api/courses/route"];
exports.modules = {

/***/ "(rsc)/./app/api/courses/route.ts":
/*!**********************************!*\
  !*** ./app/api/courses/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function GET() {\n    const courses = await prisma.course.findMany({\n        include: {\n            teacher: {\n                select: {\n                    name: true\n                }\n            }\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(courses);\n}\nasync function POST(req) {\n    const formData = await req.formData();\n    const title = formData.get('title');\n    const description = formData.get('description');\n    const file = formData.get('image');\n    const teacherId = parseInt(formData.get('teacherId'), 10);\n    if (!file || !file.name) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: 'No file uploaded'\n        }, {\n            status: 400\n        });\n    }\n    const bytes = await file.arrayBuffer();\n    const buffer = Buffer.from(bytes);\n    const fileName = `${Date.now()}-${file.name}`;\n    const filePath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), 'public/uploads', fileName);\n    await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(filePath, buffer);\n    const course = await prisma.course.create({\n        data: {\n            title,\n            description,\n            image: `/uploads/${fileName}`,\n            teacherId\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json(course);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvdXJzZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNOO0FBQ1o7QUFDNEI7QUFHaEQsTUFBTUksU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFDO0FBRUQsTUFBTUMsU0FBUyxJQUFJUCx3REFBWUE7QUFFeEIsZUFBZVE7SUFDcEIsTUFBTUMsVUFBVSxNQUFNRixPQUFPRyxNQUFNLENBQUNDLFFBQVEsQ0FBQztRQUMzQ0MsU0FBUztZQUNQQyxTQUFTO2dCQUNQQyxRQUFRO29CQUNOQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1oscURBQVlBLENBQUNhLElBQUksQ0FBQ1A7QUFDM0I7QUFDTyxlQUFlUSxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7SUFFbkMsTUFBTUMsUUFBUUQsU0FBU0UsR0FBRyxDQUFDO0lBQzNCLE1BQU1DLGNBQWNILFNBQVNFLEdBQUcsQ0FBQztJQUNqQyxNQUFNRSxPQUFPSixTQUFTRSxHQUFHLENBQUM7SUFDM0IsTUFBTUcsWUFBWUMsU0FBU04sU0FBU0UsR0FBRyxDQUFDLGNBQXdCO0lBRy9ELElBQUksQ0FBQ0UsUUFBUSxDQUFDQSxLQUFLUixJQUFJLEVBQUU7UUFDdkIsT0FBT1oscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFVSxPQUFPO1FBQW1CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3hFO0lBRUEsTUFBTUMsUUFBUSxNQUFNTCxLQUFLTSxXQUFXO0lBQ3BDLE1BQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQ0o7SUFDM0IsTUFBTUssV0FBVyxHQUFHQyxLQUFLQyxHQUFHLEdBQUcsQ0FBQyxFQUFFWixLQUFLUixJQUFJLEVBQUU7SUFDN0MsTUFBTXFCLFdBQVdsQywwQ0FBSUEsQ0FBQ21DLFFBQVFDLEdBQUcsSUFBSSxrQkFBa0JMO0lBRXZELE1BQU1oQyxzREFBU0EsQ0FBQ21DLFVBQVVOO0lBRTFCLE1BQU1wQixTQUFTLE1BQU1ILE9BQU9HLE1BQU0sQ0FBQzZCLE1BQU0sQ0FBQztRQUN4Q0MsTUFBTTtZQUNKcEI7WUFDQUU7WUFDQW1CLE9BQU8sQ0FBQyxTQUFTLEVBQUVSLFVBQVU7WUFDN0JUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9yQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDTjtBQUMzQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxaQkFJUlxcRG9jdW1lbnRzXFxuZXh0anNcXG5leHRqcy1hdXRoLWNydWRcXGFwcFxcYXBpXFxjb3Vyc2VzXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInXG5cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBjb25zdCBjb3Vyc2VzID0gYXdhaXQgcHJpc21hLmNvdXJzZS5maW5kTWFueSh7XG4gICAgaW5jbHVkZToge1xuICAgICAgdGVhY2hlcjoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oY291cnNlcyk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKClcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldCgndGl0bGUnKSBhcyBzdHJpbmdcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJykgYXMgc3RyaW5nXG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZVxuIGNvbnN0IHRlYWNoZXJJZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldCgndGVhY2hlcklkJykgYXMgc3RyaW5nLCAxMCk7XG5cblxuICBpZiAoIWZpbGUgfHwgIWZpbGUubmFtZSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm8gZmlsZSB1cGxvYWRlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICB9XG5cbiAgY29uc3QgYnl0ZXMgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKClcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYnl0ZXMpXG4gIGNvbnN0IGZpbGVOYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YFxuICBjb25zdCBmaWxlUGF0aCA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYy91cGxvYWRzJywgZmlsZU5hbWUpXG5cbiAgYXdhaXQgd3JpdGVGaWxlKGZpbGVQYXRoLCBidWZmZXIpXG5cbiAgY29uc3QgY291cnNlID0gYXdhaXQgcHJpc21hLmNvdXJzZS5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZTogYC91cGxvYWRzLyR7ZmlsZU5hbWV9YCxcbiAgICAgIHRlYWNoZXJJZCxcbiAgICB9LFxuICB9KVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihjb3Vyc2UpXG59XG5cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJ3cml0ZUZpbGUiLCJqb2luIiwiTmV4dFJlc3BvbnNlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInByaXNtYSIsIkdFVCIsImNvdXJzZXMiLCJjb3Vyc2UiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJ0ZWFjaGVyIiwic2VsZWN0IiwibmFtZSIsImpzb24iLCJQT1NUIiwicmVxIiwiZm9ybURhdGEiLCJ0aXRsZSIsImdldCIsImRlc2NyaXB0aW9uIiwiZmlsZSIsInRlYWNoZXJJZCIsInBhcnNlSW50IiwiZXJyb3IiLCJzdGF0dXMiLCJieXRlcyIsImFycmF5QnVmZmVyIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsImZpbGVQYXRoIiwicHJvY2VzcyIsImN3ZCIsImNyZWF0ZSIsImRhdGEiLCJpbWFnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/courses/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2Froute&page=%2Fapi%2Fcourses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2Froute&page=%2Fapi%2Fcourses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_courses_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/courses/route.ts */ \"(rsc)/./app/api/courses/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/courses/route\",\n        pathname: \"/api/courses\",\n        filename: \"route\",\n        bundlePath: \"app/api/courses/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ZBAIR\\\\Documents\\\\nextjs\\\\nextjs-auth-crud\\\\app\\\\api\\\\courses\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_ZBAIR_Documents_nextjs_nextjs_auth_crud_app_api_courses_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb3Vyc2VzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb3Vyc2VzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY291cnNlcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNaQkFJUiU1Q0RvY3VtZW50cyU1Q25leHRqcyU1Q25leHRqcy1hdXRoLWNydWQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1pCQUlSJTVDRG9jdW1lbnRzJTVDbmV4dGpzJTVDbmV4dGpzLWF1dGgtY3J1ZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDa0M7QUFDL0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFpCQUlSXFxcXERvY3VtZW50c1xcXFxuZXh0anNcXFxcbmV4dGpzLWF1dGgtY3J1ZFxcXFxhcHBcXFxcYXBpXFxcXGNvdXJzZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NvdXJzZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jb3Vyc2VzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jb3Vyc2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcWkJBSVJcXFxcRG9jdW1lbnRzXFxcXG5leHRqc1xcXFxuZXh0anMtYXV0aC1jcnVkXFxcXGFwcFxcXFxhcGlcXFxcY291cnNlc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2Froute&page=%2Fapi%2Fcourses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcourses%2Froute&page=%2Fapi%2Fcourses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcourses%2Froute.ts&appDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CZBAIR%5CDocuments%5Cnextjs%5Cnextjs-auth-crud&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();