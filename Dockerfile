#use python image
FROM python:3.10-slim

#set working directory
WORKDIR /app

#copy requirements
COPY requirements.txt .

#install dependenceis
RUN pip install --no-cache-dir -r requirements.txt

#cpy rest of the project
COPY . .

#expose
EXPOSE 8000

# Run application
CMD ["python", "app.py"]
