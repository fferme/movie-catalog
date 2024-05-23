import Redis from "ioredis";


class RedisService {
   private static instance: RedisService;
   private readonly redisClient: Redis;
   private static defaultExpiration = 3600;

   private constructor() {
      this.redisClient = new Redis({
         host: "localhost",
         port: 6379
      });
   }

   public static getInstance(): RedisService {
      if (!RedisService.instance) {
         RedisService.instance = new RedisService();
      }
      return RedisService.instance;
   }

   public static getDefaultExpiration(): number {
      return this.defaultExpiration;
   }

   public getClient(): Redis {
      return this.redisClient;
   }
}

export default RedisService;
