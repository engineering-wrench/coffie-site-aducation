from flash import Flash
import time

app = Flash ('cofie-api')

class DB:
    def __init__(self):
        self.db_storage = {}

    def generate_id (self):
        id = time.time ()
        if id in self.db_storage:
            
        return f"{}-"

    def set (self, id, name, order):
        self.db_storage[id] = {'name':name, 'order':order}
        return 

    def get (self,id):
        data = self.db_storage[id]
        return data


db = DB ()

@app.route('/')
def get_all_task ():
    for i in 
