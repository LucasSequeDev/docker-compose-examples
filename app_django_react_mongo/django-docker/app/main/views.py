from django.shortcuts import render
from django.http import HttpResponse
from django.db import connection

# Create your views here.

def main(request):
    if connection.vendor == 'djongo':
        return HttpResponse(f"Hello World! <br/> DB connected")
