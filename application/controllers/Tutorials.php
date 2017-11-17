<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tutorials extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->helper('url');
	}

	// GIT
	public function gitCopyFilesWithOutFolder() {
		$header['title'] = 'copy only git files with out repository name or folder';
		$header['heading'] = 'copy only git files with out repository name or folder';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/git/gitCopyFilesWithOutFolder');
		$this->load->view('footer');
	}

    public function gitStoreCredentialsInStore() {
		$header['title'] = 'store credentials in git when it ask every time';
		$header['heading'] = 'store credentials in git when it ask every time';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/git/gitStoreCredentialsInStore');
		$this->load->view('footer');
	}
	
	//angularjs
	public function angularjsErrorInterceptor() {
		$header['title'] = 'error interceptor in angularjs';
		$header['heading'] = 'error interceptor in angularjs';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/angularjs/angularjsErrorInterceptor');
		$this->load->view('footer');
	}

	public function jsRequirejs() {
		$header['title'] = 'Requirejs';
		$header['heading'] = 'Requirejs';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/js/requirejs');
		$this->load->view('footer');
	}

	public function js() {
		$header['title'] = 'js';
		$header['heading'] = 'js';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/js/js');
		$this->load->view('footer');
	}

	//angular4
	public function angularReduxBasicApp() {
		$header['title'] = 'Angular Redux Basic App';
		$header['heading'] = 'js';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/angular/angularReduxBasicApp');
		$this->load->view('footer');
	}

	public function angularForm() {
		$header['title'] = 'Angular Form';
		$header['heading'] = 'Angular Form';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/angular/angularForm');
		$this->load->view('footer');
	}

	public function angularCli() {
		$header['title'] = 'Angular CLI';
		$header['heading'] = 'Angular CLI';
		$header['keywords'] = '';
		$header['description'] = '';
		$this->load->view('header', $header);
        $this->load->view('tutorials/angular/angularCli');
		$this->load->view('footer');
	}

}
