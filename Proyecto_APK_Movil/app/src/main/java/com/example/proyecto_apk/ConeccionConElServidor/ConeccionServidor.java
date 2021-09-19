package com.example.proyecto_apk.ConeccionConElServidor;

import android.content.Context;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.example.proyecto_apk.Interfaces.VolleyCallback;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class ConeccionServidor {
  Context context;
  String url = "http://192.168.0.14:4000";
  String route="";

  public ConeccionServidor(Context context) {
    this.context = context;
    this.route = route;
  }

  public Context getContext() {
    return context;
  }

  public void setContext(Context context) {
    this.context = context;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getRoute() {
    return route;
  }

  public void setRoute(String route) {
    this.route = route;
  }
    public void coneccionHTTPPost(JSONObject parameters,String route, VolleyCallback callback){

      JsonObjectRequest request = new JsonObjectRequest(Request.Method.POST, this.url+route, parameters,new Response.Listener<JSONObject>() {
        @Override
        public void onResponse(JSONObject response) {
          callback.onSuccess(response,context);
        }
      }, new Response.ErrorListener() {
        @Override
        public void onErrorResponse(VolleyError error) {
          callback.onErrorResponse(error,context);
        }
      }) {

      };
        RequestQueue queue = Volley.newRequestQueue(context);
        queue.add(request);
    }
  public void coneccionHTTPPostWithToken(JSONObject parameters,String route, String token, VolleyCallback callback){

    JsonObjectRequest request = new JsonObjectRequest(Request.Method.POST, this.url+route, parameters,new Response.Listener<JSONObject>() {
      @Override
      public void onResponse(JSONObject response) {
        callback.onSuccess(response,context);
      }
    }, new Response.ErrorListener() {
      @Override
      public void onErrorResponse(VolleyError error) {
        callback.onErrorResponse(error,context);
      }
    }) {
      @Override
      public Map<String, String> getHeaders() throws AuthFailureError {
        Map<String, String> headers = new HashMap<>();
        headers.put("Authorization", "Bearer "+token);
        return headers;
      }
    };
    RequestQueue queue = Volley.newRequestQueue(context);
    queue.add(request);
  }

}
