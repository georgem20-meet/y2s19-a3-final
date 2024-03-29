from flask import session as login_session
from flask import Flask, render_template, request
from databases import get_user, add_user

app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guess'
 
@app.route('/login', methods=['POST'])
def login():
    user = get_user(request.form['username'])
    if user != None and user.verify_password(request.form["password"]):
        login_session['name'] = user.username
        login_session['logged_in'] = True
        return logged_in()
    else:
        return logged_in()

@app.route('/signup', methods=['POST', 'GET'])
def signup():
    #check that username isn't already taken
    user = get_user(request.form['username'])
    if user == None:
        add_user(request.form['username'],request.form['password'])
    return logged_in()


@app.route('/')
def logged_in():
    return render_template(
"index.html")

@app.route('/logout', methods=['POST'])
def logout():
    login_session['name']= None
    login_session['logged_in']= False
    return logged_in()



if __name__ == '__main__':
    app.run(debug = True)