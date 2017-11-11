<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tutorials extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
	}

	public function gitCopyFilesWithOutFolder() {
		$header['title'] = 'copy only git files with out repository name or folder';
		$header['heading'] = 'copy only git files with out repository name or folder';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/git/gitCopyFilesWithOutFolder');
		$this->load->view('footer');
	}

    

}
