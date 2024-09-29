from django.http import JsonResponse
from rest_framework import status


def standar_response(success=True, code=200, message="", data=None, status=status.HTTP_200_OK) -> JsonResponse:
    return JsonResponse({
        'success': success,
        'code': code,
        'message': message,
        'data': data,
    }, status=status)


def bad_request(message="Ocurrió un error en sus datos", data=None, code =True)->JsonResponse:
    return JsonResponse({
        'success':False,
        'code':400 if code else 404,
        'message':message,
        'data':data
    }, status = status.HTTP_400_BAD_REQUEST if code else status.HTTP_404_NOT_FOUND)

def server_error(message='Ocurrio un error inesperado')->JsonResponse:
    return JsonResponse({
        'success':False,
        'code':500,
        'message':message,
        'data':None
    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
