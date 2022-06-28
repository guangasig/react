<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Posts extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'=>[
                'type'=>'int',
                'constraint'=>12,
                'unsigned'=>true,
                'auto_increment'=>true,
            ],
            'title'=>[
                'type'=>'varchar',
                'constraint'=>255,
                'null'=>false,
            ],
            'content'=>[
                'type'=>'text',
                'null'=>false
            ]
        ]);

        $this->forge->addKey('id',true);
        $this->forge->createTable('posts');
    }

    public function down()
    {
        $this->forge->dropTable('posts');
    }
}
