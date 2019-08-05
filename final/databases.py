from model import Base,User
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///lecture.db')
Base.metadata.create_all(engine)
DBSession = sessionmaker(bind=engine)

def add_user(username, password):
	session = DBSession()
	user_object= User(username= username)
	user_object.hash_password(password)
	session.add(user_object)
	session.commit()
	session.close()

def get_user(username):
	session = DBSession()
	return session.query(User).filter_by(username=username).first()
