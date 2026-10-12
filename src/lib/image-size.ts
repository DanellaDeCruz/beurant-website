import path from "node:path";
import sharp from "sharp";

/**
 * Reads an image's pixel dimensions from /public at build time (static
 * export), so galleries can lay photos out at their real aspect ratio
 * instead of cropping everything to one shape. Server-only.
 */
export async function imageSize(
  publicPath: string
): Promise<{ width: number; height: number }> {
  const file = path.join(process.cwd(), "public", publicPath);
  const { width = 4, height = 3 } = await sharp(file).metadata();
  return { width, height };
}
