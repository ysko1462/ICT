
from memo.models import Memo
from django.shortcuts import render,HttpResponse

def get_all_memo(request):
    memo_list = Memo.objects.all()
    context = {"memos": memo_list}

    return render(request, "memo_list.html", context)