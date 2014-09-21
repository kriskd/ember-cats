<?php
App::uses('AppController', 'Controller');

class CatsController extends AppController {

    public function index() {
        $cats = array('Casper', 'Tux', 'Domino', 'Neo', 'Wynn', 'Sadie');
        $this->set('cats', json_encode($cats));
        $this->layout = 'ajax';
    }
}
