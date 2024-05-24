import Redis from "ioredis";


class RedisService {
   private static instance: RedisService;
   private readonly redisClient: Redis;
   private static defaultExpiration = 3600;

   private constructor() {
      this.redisClient = new Redis({
         host: "movie-catalog-redis-movie-catalog-fferme.l.aivencloud.com",
         port: 20958,
         username: "default",
         password: "AVNS_OY3E85e518t6uERf2dr",
         maxRetriesPerRequest: null,
         enableReadyCheck: false,
         tls: {
            rejectUnauthorized: false
         }
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
