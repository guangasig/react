<?php

namespace App\Controllers;

use App\Models\Post;
use CodeIgniter\RESTful\ResourceController;

class Posts extends ResourceController
{
    protected $modelName = Post::class;
    protected $format    = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }
}
