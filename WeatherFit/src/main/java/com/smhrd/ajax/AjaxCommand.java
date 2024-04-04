package com.smhrd.ajax;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface AjaxCommand {
	// Ajax의 요청을 처리하는 인터페이스 AjaxCommand
    void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException;
    
    
} 

