from redis import Redis
import redis
from rq import Queue, Worker

redis = Redis()

queue = Queue(connection=redis)

worker = Worker(queue, connection=redis)

worker.work()