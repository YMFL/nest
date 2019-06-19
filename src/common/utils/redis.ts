import redis from 'redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Redis {
  public client;
  constructor() {
    // if (!this.client) {
    //   console.log('redis client');
      this.client = redis.createClient();
    // }
  }

  async get(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, res) => {
        if (res) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  }
  set(key: string, value: string = 't') {
    this.client.setex(key, 3600, value);
  }
}
