import React from 'react';
import { api } from '../../config/api';

export async function LoginRequest(email, password) {
  try {
    const request = await api.post('login', { email, password });

    return request.data;
  } catch (error) {
    console.log(`Erro no LoginRequest${error}`);
    return null;
  }
}

export async function RegisterRequest(email, password) {
  try {
    const request = await api.get('register', { email, password });
    return request.data;
  } catch (error) {
    console.log(`Erro no RegisterRequest${error}`);
    return null;
  }
}

export function setUserLocalStorage(payload) {
  localStorage.setItem('user', JSON.stringify(payload));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}
