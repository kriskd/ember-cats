<?php
App::uses('AppController', 'Controller');

class CatsController extends AppController {

    public function index() {
        $this->response->header(array(
            'Access-Control-Allow-Origin: *',
            ));
        $cats = ['cats' => [
                [
                    'id' => 1,
                    'name' => 'Casper', 
                ],[
                    'id' => 2,
                    'name' => 'Tux', 
                ],[
                    'id' => 3,
                    'name' => 'Domino', 
                ],[
                    'id' => 4,
                    'name' => 'Neo', 
                ],[
                    'id' => 5,
                    'name' => 'Wynn', 
                ],[
                    'id' => 6,
                    'name' => 'Sadie',
                ],
            ]
        ];
        $this->set('cats', json_encode($cats));
        $this->layout = 'ajax';
    }
}
