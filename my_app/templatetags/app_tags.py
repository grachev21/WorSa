from django import template

register = template.Library()


@register.inclusion_tag('tags/menu.html')
def menu():
    pass


@register.inclusion_tag('tags/ajax_button.html')
def ajax_button():
    pass


@register.inclusion_tag('tags/connect_styles.html')
def connect_styles():
    pass