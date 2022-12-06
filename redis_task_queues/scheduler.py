from redis import Redis
from rq import Queue
from scheduler_util import perform_task

redis = Redis()

queue = Queue(connection=redis)

for _ in range(10):
    queue.enqueue(perform_task)