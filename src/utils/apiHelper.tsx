export interface BodyMeasurement {
  weight: number;
  height: number;
  armLength: number;
  bicepCircumference: number;
  forearmCircumference: number;
  wristCircumference: number;
  neckCircumference: number;
  headCircumference: number;
  chestCircumference: number;
  waistCircumference: number;
  pelvisCircumference: number;
  thighCircumference: number;
  calfCircumference: number;
  ankleCircumference: number;
  shoulderBreadth: number;
}

export interface AvatarApiResponse {
  avatarId: string;
  userId: string;
  avatarStatus: 'COMPLETED' | 'PROCESSING' | 'FAILED';
  fileType: string;
  signedUrl: string;
  fileName: string;
  size: number;
  bucket: string;
  contentType: string;
  bodyMeasurement: BodyMeasurement;
  timeCreated: string;
  updated: string;
  avatarName: string;
  gender: 'male' | 'female';
}

export class AvatarApi {
  private static readonly BASE_URL = 'https://trymeai-service-v2-0-950677224988.asia-southeast1.run.app/api/v1/avatar';

  /**
   * Fetch avatar data by ID
   */
  static async getAvatar(avatarId: string): Promise<AvatarApiResponse> {
    try {
      const response = await fetch(`${this.BASE_URL}/getAvatar/${avatarId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch avatar: ${response.status} ${response.statusText}`);
      }

      const data: AvatarApiResponse = await response.json();
      
      // Validate that the avatar is ready
      if (data.avatarStatus !== 'COMPLETED') {
        throw new Error(`Avatar is not ready. Status: ${data.avatarStatus}`);
      }

      return data;
    } catch (error) {
      console.error('Error fetching avatar:', error);
      throw error;
    }
  }

  /**
   * Check if avatar URL is valid and accessible
   */
  static async validateAvatarUrl(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
}