#Firestore
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Use a service account
cred = credentials.Certificate('./serviceAccount.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

def Add(collectionName, documentName, first, last, born):
    doc_ref = db.collection(collectionName).document(documentName)
    doc_ref.set({
        u'first': first,
        u'last': last,
        u'born': born
    })

#Add('users', 'diana','diana', 'day', 2000)

def Read(collectionName):
    doc_ref = db.collection(collectionName)
    docs = doc_ref.stream()
    return docs


'''
#read
users_ref = db.collection(u'users')
docs = users_ref.stream()
print(docs)
for doc in docs:
    print(f'{doc.id} => {doc.to_dict()}')
'''