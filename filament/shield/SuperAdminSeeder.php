<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Artisan;

class SuperAdminSeeder extends Seeder
{
    public function run()
    {
        $superAdminRole = Role::firstOrCreate(['name' => 'super_admin']);

        $user = User::Create(
            [
                'email' => 'superadmin@gmail.com',
                'name' => 'Super Admin',
                'password' => '123456789',
            ]
        );

        $user->assignRole($superAdminRole);

        Artisan::call('shield:generate', ['--all' => true]);

        $permissions = Permission::all();
        $superAdminRole->syncPermissions($permissions);
    }
}