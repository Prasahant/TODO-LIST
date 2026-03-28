from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///todo.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(200), nullable = False)
    desc = db.Column(db.String(500), nullable = False)
    date_created = db.Column(db.DateTime, default = datetime.now)
    
    
    def __repr__(self):
        return f"{self.sno} - {self.title}"



@app.route('/', methods=['GET','POST'])
def home():

    if request.method == "POST":
        title = request.form['title']
        desc = request.form['desc']

        todo = Todo(title=title, desc=desc)
        db.session.add(todo)
        db.session.commit()
        return redirect("/")

    allTodo = Todo.query.all()
    return render_template('index.html', allTodo=allTodo)




@app.route('/show')
def show():
    allTodo = Todo.query.all()
    print(allTodo)
    return "this is products page"

@app.route('/update/<int:sno>', methods=['GET','POST'])
def update(sno):
    todo = Todo.query.filter_by(sno=sno).first()
    if request.method == 'POST':
        todo.title = request.form['title']
        todo.desc = request.form['desc']
        db.session.commit()
        
        return redirect('/')
    
    return render_template('update.html', todo=todo)


@app.route('/delete/<int:sno>')
def delete(sno):
    todo = Todo.query.filter_by(sno=sno).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")


@app.route('/search')
def search():

    query = request.args.get('query')

    results = Todo.query.filter(
        Todo.title.contains(query) | Todo.desc.contains(query)
    ).all()

    return render_template('index.html', allTodo=results)


@app.route('/about')
def about():
    return render_template('about.html')

if __name__=="__main__":
    app.run(debug=True, port =8000)
    
    
    