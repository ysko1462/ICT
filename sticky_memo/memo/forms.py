# sticky_memo/memo/forms.py

from django import forms
from memo.models import Memo

class MemoForm(forms.ModelForm):
    class Meta:
        model = Memo
        fields = ['title', 'content']