---
sidebar_position: 5
---
# Language Samples
Below are a few select samples of how to use the webhook API. If you would like to contribute another language, feel free to submit a pull request [on the docs repository](https://github.com/vatsimnetwork/apiv2-docs).

## Python (Django)
```py
import os
from django.http import HttpResponse, HttpResponseForbidden, HttpResponseBadRequest
from apps.users.models import User


def process_member_created_webhook(resource, action):
    # Depending on your schema, you may need to do some custom mapping of
    # VATSIM fields to your own fields.
    data = {delta.get('field'): delta.get('after') for delta in action.get('deltas')}
    new_user = User(**data)
    new_user.save()


def process_member_changed_webhook(resource, action):
    user = User.objects.get(cid=req_body.get('resource'))
    for delta in action.get('deltas'):
        setattr(user, delta.get('field'), delta.get('after'))


def receive_webhook(request):
    """
    Endpoint where webhooks get sent to.

    Determines if the authorization token is valid and figures out which
    helper function to call to deal with the webhook.
    """
    if request.META.get('Authorization') != os.getenv('WEBHOOK_API_TOKEN'):
        return HttpResponseForbidden('Invalid webhook token')

    for action in request.body.get('actions'):
        match action.get('action'):
            case 'member_created_action':
                process_member_created_webhook(request.body.get('resource'), action)
            case 'member_changed_action':
                process_member_changed_webhook(request.body.get('resource'), action)
            # Rinse and repeat for other webhook actions
            default:
                return HttpResponseBadRequest('Invalid webhook action')

    # 200 OK response indicates to the API that the webhook was recieved and processed
    return HttpResponse()
```