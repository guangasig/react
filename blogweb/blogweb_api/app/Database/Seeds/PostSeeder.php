<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use Faker\Factory;

class PostSeeder extends Seeder
{
    public function run()
    {
        $faker = Factory::create();

        $this->db->table('posts')->truncate();

        for ($i = 0; $i < 10; $i++) {
            $data[] = [
                'title' => $faker->name,
                'content' => $faker->text,
            ];
        }
        $this->db->table('posts')->insertBatch($data);
    }
}
