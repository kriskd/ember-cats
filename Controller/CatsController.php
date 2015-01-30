<?php
App::uses('AppController', 'Controller');

class CatsController extends AppController {

    public function index() {
        $this->response->header(array(
            'Access-Control-Allow-Origin: *',
        ));

        $data = $this->Cat->find('all');
        $this->set('data', $data);
    }
}
