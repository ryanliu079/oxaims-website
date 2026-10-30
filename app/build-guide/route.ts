// Keep old links useful after removing the build guide.
export function GET(request: Request) {
  return Response.redirect(new URL('/projects#projects', request.url), 308);
}
