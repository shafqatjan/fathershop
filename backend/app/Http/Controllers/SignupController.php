<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SignupController extends Controller
{
    public function signup(UserRequest $request)
    {
        dd($request->all());
        // Validation passed, create new user
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();

        // Optionally, you can return the created user or a success message
        return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
    }
}
