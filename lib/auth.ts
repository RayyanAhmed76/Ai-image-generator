import { NextRequest } from "next/server";
import { prisma } from "./prisma";

export async function getCurrentUser(req: NextRequest) {
  const token = req.cookies.get("flux_auth")?.value;
  
  if (!token) {
    return null;
  }

  try {
    // Find token in database
    const tokenRecord = await prisma.token.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!tokenRecord) {
      return null;
    }

    // Check if token is expired
    if (new Date() > tokenRecord.expiresAt) {
      // Delete expired token
      await prisma.token.delete({ where: { id: tokenRecord.id } });
      return null;
    }

    return tokenRecord.user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function getUserUsageCount(userId: string): Promise<number> {
  try {
    const count = await prisma.usage.count({
      where: { userId },
    });
    return count;
  } catch (error) {
    console.error("Error getting usage count:", error);
    return 0;
  }
}






