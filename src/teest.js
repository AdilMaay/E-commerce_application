getOperatingCentersList(skip?: number, size?: number, order?: string, orderBy?: string, all?: boolean, search?: string): Observable<any> {
    return this.apiService.get(`referential/operatingcenters/getlist/${skip}/${size}/${order}/${orderBy}/${all}?search=${search}`);
  }
  getAllOperatingCenters(): Observable<any> {
    return this.apiService.get('referential/operatingcenters/all');
  }
  
  getActiveOperatingCentersByUser(): Observable<any> {
    return this.apiService.get("referential/me/operatingcenters/active");
  }
  
  getActiveOperatingCenters(): Observable<any> {
    return this.apiService.get('referential/operatingcenters/active');
  }

  saveOperatingCenter(operatingCenter: OperatingCenter): Observable<any> {
    return this.apiService.post('referential/operatingcenters/add', operatingCenter);
  }

  updateOperatingCenter(operatingCenter: OperatingCenter): Observable<any> {
    return this.apiService.put('referential/operatingcenters/update', operatingCenter);
  }

  deleteOperatingCenter(id: number): Observable<any> {
    return this.apiService.delete('referential/operatingcenters/delete/' + id);
  }
